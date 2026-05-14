/**
 * Generated Tool: usersTool_0479
 * Domain: Users
 * ID: 0479
 */
exports.usersTool_0479 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0479:', error);
    throw error;
  }
};
