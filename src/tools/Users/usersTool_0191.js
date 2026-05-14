/**
 * Generated Tool: usersTool_0191
 * Domain: Users
 * ID: 0191
 */
exports.usersTool_0191 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0191:', error);
    throw error;
  }
};
