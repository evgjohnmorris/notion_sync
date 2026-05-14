/**
 * Generated Tool: usersTool_0155
 * Domain: Users
 * ID: 0155
 */
exports.usersTool_0155 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0155:', error);
    throw error;
  }
};
