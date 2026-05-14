/**
 * Generated Tool: usersTool_0513
 * Domain: Users
 * ID: 0513
 */
exports.usersTool_0513 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0513:', error);
    throw error;
  }
};
