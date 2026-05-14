/**
 * Generated Tool: usersTool_0564
 * Domain: Users
 * ID: 0564
 */
exports.usersTool_0564 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0564:', error);
    throw error;
  }
};
