/**
 * Generated Tool: usersTool_0473
 * Domain: Users
 * ID: 0473
 */
exports.usersTool_0473 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0473:', error);
    throw error;
  }
};
