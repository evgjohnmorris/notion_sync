/**
 * Generated Tool: usersTool_0833
 * Domain: Users
 * ID: 0833
 */
exports.usersTool_0833 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0833:', error);
    throw error;
  }
};
