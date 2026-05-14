/**
 * Generated Tool: usersTool_0774
 * Domain: Users
 * ID: 0774
 */
exports.usersTool_0774 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0774:', error);
    throw error;
  }
};
