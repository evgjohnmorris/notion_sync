/**
 * Generated Tool: usersTool_0390
 * Domain: Users
 * ID: 0390
 */
exports.usersTool_0390 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0390:', error);
    throw error;
  }
};
