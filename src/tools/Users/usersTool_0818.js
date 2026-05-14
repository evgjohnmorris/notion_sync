/**
 * Generated Tool: usersTool_0818
 * Domain: Users
 * ID: 0818
 */
exports.usersTool_0818 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0818:', error);
    throw error;
  }
};
