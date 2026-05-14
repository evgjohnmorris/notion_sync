/**
 * Generated Tool: usersTool_0007
 * Domain: Users
 * ID: 0007
 */
exports.usersTool_0007 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0007:', error);
    throw error;
  }
};
