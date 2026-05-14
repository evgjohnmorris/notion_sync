/**
 * Generated Tool: usersTool_0941
 * Domain: Users
 * ID: 0941
 */
exports.usersTool_0941 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0941:', error);
    throw error;
  }
};
