/**
 * Generated Tool: workspacesTool_0988
 * Domain: Workspaces
 * ID: 0988
 */
exports.workspacesTool_0988 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0988:', error);
    throw error;
  }
};
