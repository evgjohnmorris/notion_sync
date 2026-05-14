/**
 * Generated Tool: blocksTool_0240
 * Domain: Blocks
 * ID: 0240
 */
exports.blocksTool_0240 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0240:', error);
    throw error;
  }
};
