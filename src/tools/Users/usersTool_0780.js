/**
 * Generated Tool: usersTool_0780
 * Domain: Users
 * ID: 0780
 */
exports.usersTool_0780 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0780:', error);
    throw error;
  }
};
