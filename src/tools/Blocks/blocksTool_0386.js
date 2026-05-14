/**
 * Generated Tool: blocksTool_0386
 * Domain: Blocks
 * ID: 0386
 */
exports.blocksTool_0386 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0386:', error);
    throw error;
  }
};
