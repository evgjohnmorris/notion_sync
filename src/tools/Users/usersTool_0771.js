/**
 * Generated Tool: usersTool_0771
 * Domain: Users
 * ID: 0771
 */
exports.usersTool_0771 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0771:', error);
    throw error;
  }
};
