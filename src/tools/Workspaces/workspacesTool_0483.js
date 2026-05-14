/**
 * Generated Tool: workspacesTool_0483
 * Domain: Workspaces
 * ID: 0483
 */
exports.workspacesTool_0483 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0483:', error);
    throw error;
  }
};
