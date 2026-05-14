/**
 * Generated Tool: usersTool_0091
 * Domain: Users
 * ID: 0091
 */
exports.usersTool_0091 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0091:', error);
    throw error;
  }
};
