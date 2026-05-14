/**
 * Generated Tool: usersTool_0092
 * Domain: Users
 * ID: 0092
 */
exports.usersTool_0092 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0092:', error);
    throw error;
  }
};
