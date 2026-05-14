/**
 * Generated Tool: usersTool_0254
 * Domain: Users
 * ID: 0254
 */
exports.usersTool_0254 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0254:', error);
    throw error;
  }
};
