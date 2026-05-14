/**
 * Generated Tool: usersTool_0710
 * Domain: Users
 * ID: 0710
 */
exports.usersTool_0710 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0710:', error);
    throw error;
  }
};
