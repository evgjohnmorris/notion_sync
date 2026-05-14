/**
 * Generated Tool: usersTool_0003
 * Domain: Users
 * ID: 0003
 */
exports.usersTool_0003 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0003:', error);
    throw error;
  }
};
