/**
 * Generated Tool: usersTool_0764
 * Domain: Users
 * ID: 0764
 */
exports.usersTool_0764 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0764:', error);
    throw error;
  }
};
