/**
 * Generated Tool: usersTool_0561
 * Domain: Users
 * ID: 0561
 */
exports.usersTool_0561 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0561:', error);
    throw error;
  }
};
