/**
 * Generated Tool: usersTool_0912
 * Domain: Users
 * ID: 0912
 */
exports.usersTool_0912 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0912:', error);
    throw error;
  }
};
