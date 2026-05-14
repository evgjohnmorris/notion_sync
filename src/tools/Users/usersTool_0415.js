/**
 * Generated Tool: usersTool_0415
 * Domain: Users
 * ID: 0415
 */
exports.usersTool_0415 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0415:', error);
    throw error;
  }
};
