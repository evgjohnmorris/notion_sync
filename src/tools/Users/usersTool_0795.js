/**
 * Generated Tool: usersTool_0795
 * Domain: Users
 * ID: 0795
 */
exports.usersTool_0795 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0795:', error);
    throw error;
  }
};
