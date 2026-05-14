/**
 * Generated Tool: usersTool_0931
 * Domain: Users
 * ID: 0931
 */
exports.usersTool_0931 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0931:', error);
    throw error;
  }
};
