/**
 * Generated Tool: usersTool_0450
 * Domain: Users
 * ID: 0450
 */
exports.usersTool_0450 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0450:', error);
    throw error;
  }
};
