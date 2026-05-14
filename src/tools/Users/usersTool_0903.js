/**
 * Generated Tool: usersTool_0903
 * Domain: Users
 * ID: 0903
 */
exports.usersTool_0903 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0903:', error);
    throw error;
  }
};
