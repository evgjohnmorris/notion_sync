/**
 * Generated Tool: usersTool_0001
 * Domain: Users
 * ID: 0001
 */
exports.usersTool_0001 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0001:', error);
    throw error;
  }
};
