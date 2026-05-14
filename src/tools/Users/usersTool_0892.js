/**
 * Generated Tool: usersTool_0892
 * Domain: Users
 * ID: 0892
 */
exports.usersTool_0892 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0892:', error);
    throw error;
  }
};
