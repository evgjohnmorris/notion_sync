/**
 * Generated Tool: usersTool_0985
 * Domain: Users
 * ID: 0985
 */
exports.usersTool_0985 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0985:', error);
    throw error;
  }
};
