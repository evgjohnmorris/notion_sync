/**
 * Generated Tool: usersTool_0812
 * Domain: Users
 * ID: 0812
 */
exports.usersTool_0812 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0812:', error);
    throw error;
  }
};
