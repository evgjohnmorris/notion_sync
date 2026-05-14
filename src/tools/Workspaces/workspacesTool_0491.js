/**
 * Generated Tool: workspacesTool_0491
 * Domain: Workspaces
 * ID: 0491
 */
exports.workspacesTool_0491 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0491:', error);
    throw error;
  }
};
