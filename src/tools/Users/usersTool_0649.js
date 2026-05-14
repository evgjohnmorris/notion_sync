/**
 * Generated Tool: usersTool_0649
 * Domain: Users
 * ID: 0649
 */
exports.usersTool_0649 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0649:', error);
    throw error;
  }
};
