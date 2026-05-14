/**
 * Generated Tool: usersTool_0891
 * Domain: Users
 * ID: 0891
 */
exports.usersTool_0891 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0891:', error);
    throw error;
  }
};
