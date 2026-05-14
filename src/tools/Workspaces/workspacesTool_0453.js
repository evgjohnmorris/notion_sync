/**
 * Generated Tool: workspacesTool_0453
 * Domain: Workspaces
 * ID: 0453
 */
exports.workspacesTool_0453 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0453:', error);
    throw error;
  }
};
