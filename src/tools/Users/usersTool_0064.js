/**
 * Generated Tool: usersTool_0064
 * Domain: Users
 * ID: 0064
 */
exports.usersTool_0064 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0064:', error);
    throw error;
  }
};
