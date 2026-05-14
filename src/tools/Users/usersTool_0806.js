/**
 * Generated Tool: usersTool_0806
 * Domain: Users
 * ID: 0806
 */
exports.usersTool_0806 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0806:', error);
    throw error;
  }
};
