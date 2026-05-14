/**
 * Generated Tool: workspacesTool_0822
 * Domain: Workspaces
 * ID: 0822
 */
exports.workspacesTool_0822 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0822:', error);
    throw error;
  }
};
