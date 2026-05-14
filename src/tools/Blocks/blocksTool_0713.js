/**
 * Generated Tool: blocksTool_0713
 * Domain: Blocks
 * ID: 0713
 */
exports.blocksTool_0713 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0713:', error);
    throw error;
  }
};
