/**
 * Generated Tool: usersTool_0736
 * Domain: Users
 * ID: 0736
 */
exports.usersTool_0736 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0736:', error);
    throw error;
  }
};
