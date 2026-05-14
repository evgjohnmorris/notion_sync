/**
 * Generated Tool: usersTool_0509
 * Domain: Users
 * ID: 0509
 */
exports.usersTool_0509 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0509:', error);
    throw error;
  }
};
