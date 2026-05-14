/**
 * Generated Tool: blocksTool_0453
 * Domain: Blocks
 * ID: 0453
 */
exports.blocksTool_0453 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0453:', error);
    throw error;
  }
};
