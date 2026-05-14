/**
 * Generated Tool: usersTool_0675
 * Domain: Users
 * ID: 0675
 */
exports.usersTool_0675 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0675:', error);
    throw error;
  }
};
