/**
 * Generated Tool: usersTool_0070
 * Domain: Users
 * ID: 0070
 */
exports.usersTool_0070 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0070:', error);
    throw error;
  }
};
