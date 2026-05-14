/**
 * Generated Tool: usersTool_0317
 * Domain: Users
 * ID: 0317
 */
exports.usersTool_0317 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0317:', error);
    throw error;
  }
};
