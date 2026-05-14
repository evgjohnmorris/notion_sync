/**
 * Generated Tool: usersTool_0853
 * Domain: Users
 * ID: 0853
 */
exports.usersTool_0853 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0853:', error);
    throw error;
  }
};
