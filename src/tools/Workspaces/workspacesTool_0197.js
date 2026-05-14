/**
 * Generated Tool: workspacesTool_0197
 * Domain: Workspaces
 * ID: 0197
 */
exports.workspacesTool_0197 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0197:', error);
    throw error;
  }
};
