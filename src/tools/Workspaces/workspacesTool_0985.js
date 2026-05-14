/**
 * Generated Tool: workspacesTool_0985
 * Domain: Workspaces
 * ID: 0985
 */
exports.workspacesTool_0985 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0985:', error);
    throw error;
  }
};
