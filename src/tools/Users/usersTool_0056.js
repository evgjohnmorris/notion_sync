/**
 * Generated Tool: usersTool_0056
 * Domain: Users
 * ID: 0056
 */
exports.usersTool_0056 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0056:', error);
    throw error;
  }
};
